import colors from './colors';

const theme = {
  layout: {
    sideBarWidth: 240,
    headerHeight: 70,
    breadCrumbHeight: 30,
    footerHeight: 40,
    gutter: 24,
    padding: 15,
    contentOuterPaddingX: 10,
    contentOuterPaddingY: 15,
    setGuttter: function () {
      return (this.padding / 2) * 2;
    },
    getContentHeight: function () {
      return this.headerHeight + this.footerHeight;
    },
    contentHeight: function () {
      return (
        window.innerHeight -
        this.getContentHeight() -
        this.contentOuterPaddingX * 3
      );
    },
    modalPadding: {
      header: 10,
      contentX: 15,
      contentY: 20,
      footer: 10,
    },
    operationModalWidth: 480,
    modalForm: {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 14,
      },
    },
    wrapperCol: function () {
      return { offset: this.modalForm.labelCol.span };
    },
  },
  colors: {
    primaryColor: colors.primary,
    primaryColorDark: '#215967',
    successColor: colors.success,
    successColorDark: '#287D3D',
    errorColor: colors.error,
    errorColorDark: '#a41d27',
    infoColor: colors.info,
    infoColorDark: '#9c7a2d',
    processingColor: '#573A77',
    processingColorDark: '#3a2059',
    warningColor: colors.warning,
    warningColorDark: '#a41d27',
    bodyBg: colors.bodyBackground,
    border: colors.border,
    borderContent: colors.borderContent,
    borderDark: colors.borderDark,
    text: colors.text,
    iramLogoColor: colors.iramLogoColor,
    white: colors.white,
    secondary: colors.secondary,
  },
  messageDuration: 0.8,
  boxShadow: [
    '0px 1px 8px rgb(0 0 0 / 20%), 0px 3px 3px rgb(0 0 0 / 12%), 0px 3px 4px rgb(0 0 0 / 14%)', // Sidebar
    '0px 2px 6px rgba(0, 0, 0, 0.05)', // Breadcrumb
    '0px 0px 5px rgb(0 0 0 / 15%)', // Footer
    'inset 0px 2px 6px rgba(0, 0, 0, 0.09)', // Content
  ],
};

export default theme;
