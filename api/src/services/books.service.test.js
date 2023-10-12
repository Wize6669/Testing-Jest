// eslint-disable-next-line quotes
const BooksService = require("./books.service");

const fakeBooks = [
  {
    _id: 1,
    // eslint-disable-next-line quotes
    name: "Harry Potter",
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

// eslint-disable-next-line quotes
jest.mock("../lib/mongo.lib", () => jest.fn().mockImplementation(() => MongoLibStub));

// eslint-disable-next-line quotes
describe("Test for BooksService", () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  // eslint-disable-next-line quotes
  describe("test for getBooks,", () => {
    // eslint-disable-next-line quotes
    test("should return list book", async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
    });

    // eslint-disable-next-line quotes
    test("should return the name of the first book", async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books[0].name);
      // Assert
      // eslint-disable-next-line quotes
      expect(books[0].name).toEqual("Harry Potter");
    });
  });
});
