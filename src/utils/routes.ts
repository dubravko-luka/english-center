export const AppRoutes = {
  test: '/test',
  testDetail: (slug: string) => { return `${AppRoutes.test}/${slug}` }
}