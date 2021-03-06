// Override
var Layout = function (parent, newWidth, newHeight) {
    if (this.rexSizer.hidden) {
        return this;
    }

    this.preLayout(parent);

    // Set size
    if (newWidth === undefined) {
        newWidth = Math.max(this.childrenWidth, this.minWidth);
    }
    if (newHeight === undefined) {
        newHeight = Math.max(this.childrenHeight, this.minHeight);
    }
    this.resize(this.minWidth, this.minHeight);

    // Layout background children
    this.layoutBackgrounds();

    return this.postLayout();
}
export default Layout;