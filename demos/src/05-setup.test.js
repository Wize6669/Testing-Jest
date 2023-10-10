describe("Set", () => {
  beforeAll(() => {
    // console.log("Before all");
    // Levanta el servicio antes de ejecurar la prueba
  });

  beforeEach(() => {
    // console.log("BeforeEach");
  });

  afterEach(() => {
    // console.log("AfterEach");
  });

  test("case 1", () => {
    // console.log("case 1");
    expect(1 + 1).toBe(2);
  });

  test("case 2", () => {
    // console.log("case 2");
    expect(1 + 1).toBe(2);
  });

  describe("other group", () => {
    beforeAll(() => {
      // console.log("Before all");
      // Levanta el servicio antes de ejecurar la prueba
    });
    test("case 3", () => {
      // console.log("case 3");
      expect(1 + 1).toBe(2);
    });
    afterAll(() => {
      // console.log("After all");
      // Levanta el servicio antes de ejecurar la prueba
    });
  });
});
