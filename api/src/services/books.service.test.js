// eslint-disable-next-line quotes
const { generateManyBooks, generateOneBook } = require("../fakes/book.fakes");
const BooksService = require("./books.service");

const mockGetAll = jest.fn();

// eslint-disable-next-line quotes
jest.mock("../lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

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
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      const books = await service.getBooks({});
      // console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line quotes
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });

    // eslint-disable-next-line quotes
    test("should return the name of the first book", async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // console.log(books[0].name);
      // Assert
      // eslint-disable-next-line quotes
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
