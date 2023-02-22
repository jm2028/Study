console.log('그림판');
class DrawingBoard {
  MODE = 'NONE'; //NONE BRUSH ERASER
  IsMouseDown = false;
  constructor() {
    this.assignElement();
    this.initContext();
    this.addEvent();
  }

  assignElement() {
    this.containerEl = document.getElementById('container');
    this.canvasEl = this.containerEl.querySelector('#canvas');
    this.toolbarEl = this.containerEl.querySelector('#toolbar');
    this.brushEl = this.containerEl.querySelector('#brush');
    this.colorPicker = this.toolbarEl.querySelector('#colorPicker');
    this.brushPanelEl = this.containerEl.querySelector('#brushPanel');
    this.brushSlideEl = this.brushPanelEl.querySelector('#brushSize');

    this.brushSizePreveiewEl = this.brushPanelEl.querySelector('#brushSizePreview');
  }

  initContext() {
    this.context = this.canvasEl.getContext('2d');
  }

  addEvent() {
    this.brushEl.addEventListener('click', this.onClickBrush.bind(this));
    this.canvasEl.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.canvasEl.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.canvasEl.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.canvasEl.addEventListener('mouseout', this.onMouseOut.bind(this));
    this.brushSlideEl.addEventListener('input', this.onChangeBrushSize.bind(this));
    this.colorPicker.addEventListener('input', this.onChangeColor.bind(this));
  }

  onMouseOut() {
    if (this.MODE === 'NONE') return;
    this.IsMouseDown = false;
  }

  onChangeColor(event) {
    this.brushSizePreveiewEl.style.background = event.target.value;
  }

  onChangeBrushSize(event) {
    this.brushSizePreveiewEl.style.width = `${event.target.value}px`;
    this.brushSizePreveiewEl.style.height = `${event.target.value}px`;
  }

  onMouseMove(event) {
    if (!this.IsMouseDown) return;
    const currentPosition = this.getMousePosition(event);
    this.context.lineTo(currentPosition.x, currentPosition.y);
    this.context.stroke();
  }

  onMouseUp(event) {
    if (this.MODE === 'NONE') return;
    this.IsMouseDown = false;
  }

  onMouseDown(event) {
    if (this.MODE == 'NONE') return;
    this.IsMouseDown = true;
    const currentPosition = this.getMousePosition(event);
    this.context.beginPath();
    this.context.moveTo(currentPosition.x, currentPosition.y);
    this.context.lineCap = 'round';
    this.context.strokeStyle = this.colorPicker.value;
    this.context.lineWidth = this.brushSlideEl.value;
    // this.context.lineTo(400, 400);
    // this.context.stroke();
  }

  getMousePosition(event) {
    const boundaries = this.canvasEl.getBoundingClientRect();
    return {
      x: event.clientX - boundaries.left,
      y: event.clientY - boundaries.top,
    };
  }

  onClickBrush(event) {
    const isActive = event.currentTarget.classList.contains('active');
    this.MODE = isActive ? 'NONE' : 'BRUSH';
    this.canvasEl.style.cursor = isActive ? 'default' : 'crosshair';
    this.brushPanelEl.classList.toggle('hide');
    this.brushEl.classList.toggle('active');
  }
}

new DrawingBoard();
