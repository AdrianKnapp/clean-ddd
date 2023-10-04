import { Slug } from "./slug";

test("should be able to create a new slug from text", () => {
  const slug = Slug.createFromText("An example of slug");

  expect(slug.value).toBe("an-example-of-slug");
})