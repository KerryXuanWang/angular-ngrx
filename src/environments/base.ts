export const base = {
  apiPrefix: '/api/v1',
  apiUrl: '',

  info: {
    productVersion: trim(`<%= data.productVersion %>`, '0.0.0-000000'),
    buildDate: trim(`<%= data.buildDate %>`, '1970-01-01T00:00:00.000Z'),
    licenseYear: trim(`<%= data.licenseYear %>`, '1970'),
    productName: trim(
      `<%= data.productName %>`,
      'VMware vCloud Director&reg; Object Storage Extension&trade;',
    ),
  },
};

function trim(...list: string[]) {
  return (
    list
      .filter((item) => !!item)
      .filter((item) => item.startsWith('<%') === false)
      .concat('{N/A}')
      .shift() || ''
  );
}
