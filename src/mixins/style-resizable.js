import Events from '../utils/events';

const Sizes = {
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3
};

const Widths = {
  LARGE_DEVICE_MINIMUM: 992,
  MEDIUM_DEVICE_MINIMUM: 786
};

export default {

  statics: {
    Sizes: Sizes,
  },

  getInitialState() {
    return {
      deviceSize: Sizes.SMALL,
    };
  },

  componentDidMount() {
    this._updateDeviceSize();
    if (!this.manuallyBindResize) this._bindResize();
  },

  componentWillUnmount() {
    this._unbindResize();
  },

  isDeviceSize(desiredSize) {
    return this.state.deviceSize >= desiredSize;
  },

  getDeviceSize() {
    const width = window.innerWidth;
    if (width >= Widths.LARGE_DEVICE_MINIMUM) return Sizes.LARGE;
    if (width >= Widths.MEDIUM_DEVICE_MINIMUM) return Sizes.MEDIUM;
    return Sizes.SMALL; // width < 768
  },


  _updateDeviceSize() {
    this.setState({deviceSize: this.getDeviceSize()});
    
    // const width = window.innerWidth;
    //
    // if (width >= 992) {
    //   this.setState({deviceSize: Sizes.LARGE});
    // } else if (width >= 768) {
    //   this.setState({deviceSize: Sizes.MEDIUM});
    // } else { // width < 768
    //   this.setState({deviceSize: Sizes.SMALL});
    // }
  },

  _bindResize() {
    Events.on(window, 'resize', this._updateDeviceSize);
  },

  _unbindResize() {
    Events.off(window, 'resize', this._updateDeviceSize);
  },
};
