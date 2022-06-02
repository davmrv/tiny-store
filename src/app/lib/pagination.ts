export const buildPagination = ({ page = 1, perPage = 10 }) => {
  page = Number(page);
  perPage = Number(perPage);

  return {
    skip: (page - 1) * perPage,
    take: perPage,
    pagination: {
      page,
      perPage,
    }
  };
}
