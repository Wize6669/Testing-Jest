// eslint-disable-next-line quotes
const BooksService = require("./books.service");

const fakeBooks = [
  {
    _id: 1,
    // eslint-disable-next-line quotes
    name: "Harry Potter",
  },
];

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
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      const books = await service.getBooks({});
      // console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      // eslint-disable-next-line quotes
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });

    // eslint-disable-next-line quotes
    test("should return the name of the first book", async () => {
      // Arrange
      mockGetAll.mockResolvedValue([
        {
          _id: 2,
          // eslint-disable-next-line quotes
          name: "Harry Potter2",
        },
      ]);
      // Act
      const books = await service.getBooks({});
      // console.log(books[0].name);
      // Assert
      // eslint-disable-next-line quotes
      expect(books[0].name).toEqual("Harry Potter2");
    });
  });
});
