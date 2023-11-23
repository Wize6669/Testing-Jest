// Esta es una prueba de integración, pero lleva la extensión e2e.js para que...
// ... lo ejecute testRegex del archivo de configuración de Supertest (jest-e2e.json).

const mockGetAll = jest.fn(); // Tocó subirla para que la llame bien en el test.

const request = require("supertest");

const { generateManyBooks } = require("../src/fakes/book.fakes");

const createApp = require("../src/app");

describe("Test for hello endpoint", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("test for [GET]/api/v1/books", () => {
    test("should return the list books", async () => {
      // arrange
      const fakeBooks = generateManyBooks(2);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const response = await request(app).get("/api/v1/books");
      console.log(response);
      // Assert
      expect(response.body.length).toEqual(fakeBooks.length);
    });
  });
});
