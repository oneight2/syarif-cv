import NextImage from "next/image";

/**
 * ! Handle Layouting Image NextJS
 * @param {width, maxWidth} param0
 * @returns
 */
const OwnImage = ({ width, maxWidth, height, maxHeight, ...rest }) => {
  let widths = {};
  width ? (widths["width"] = width) : "100%";

  return (
    <div className="image-container" style={widths}>
      <NextImage className="next-image" {...rest} />
    </div>
  );
};

export default OwnImage;
