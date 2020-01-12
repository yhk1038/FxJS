export default (name, successChecker) => {
  describe(name, () => {
    it('ok', successChecker);
  });
}
