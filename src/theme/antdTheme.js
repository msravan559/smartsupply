import colors from "./colors";

const antdTheme = {
  token: {
    colorPrimary: colors.primary,
    colorSuccess: colors.success,
    colorWarning: colors.error,
    colorInfo: colors.info,
    colorText: colors.text,
    colorTextBase: colors.text,
    colorTextDescription: colors.text,
    colorBorder: colors.border,
    colorBorderSecondary: colors.border,
    fontFamily: '"Open Sans", sans-serif',
    controlOutline: "transparent",
  },
  components: {
    Button: {
      controlOutlineWidth: 0,
    },
    Table: {
      colorTextHeading: colors.primary,
    },
    Modal: {
      // paddingMD: 0,
      // paddingContentHorizontalLG: 0,
    },
    Form: {
      controlOutline: "0",
    },
    Typography: {
      lineHeight: 1,
    },
  },
};

export default antdTheme;
