import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function generateFakeISBN(): string {
  const isbn = '978' + Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
  return isbn;
}


function fabricateUserData() {
  const names = ["John", "Jane", "David", "Emma", "Michael", "Olivia"];
  const surnames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller"];

  return names.map((name, index) => ({
    name,
    surname: surnames[index],
    email: `${name.toLowerCase()}.${surnames[index].toLowerCase()}@example.com`,
  }));
}

function fabricateBookData(userIds: number[]) {
  const titles = [
    "The Great Gatsby",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Catcher in the Rye",
    "The Hobbit",
    "Moby-Dick",
    "Harry Potter and the Sorcerer's Stone",
    "The Lord of the Rings",
    "Brave New World",
  ];

  return titles.map((title, index) => ({
    title,
    author: `Author ${index + 1}`,
    ISBN: generateFakeISBN(),
    synopsis: `${title} lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in leo at enim consectetur pellentesque. Vestibulum consectetur tincidunt lacus in maximus. Ut eu fermentum libero. In ultricies, massa a gravida posuere, est erat ornare orci, vitae condimentum erat ex sit amet libero. In ut semper nulla.`,
    completion: Math.floor(Math.random() * 10),
    owner: {
      connect: { id: userIds[index % userIds.length] },
    },
  }));
}

async function seedDatabase() {
  try {
    // Create users
    const userData = fabricateUserData();
    const createdUsers = await Promise.all(
      userData.map((user) => prisma.user.create({ data: user }))
    );

    // Create books
    const bookData = fabricateBookData(createdUsers.map((user) => user.id));
    await Promise.all(
      bookData.map((book) => prisma.book.create({ data: book }))
    );

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();

