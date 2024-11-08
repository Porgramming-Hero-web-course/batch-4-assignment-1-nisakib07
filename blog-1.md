# The Significance of Union and Intersection Types in TypeScript

In TypeScript, **union** and **intersection** types are essential tools for writing flexible, type-safe code. These types allow variables to hold multiple types of values, giving you more control over your code while maintaining type safety.

## Union Types (`|`)

A **union type** allows a variable to be one of several types. It's useful when you expect a variable to be different types at different times.

### Example:

```typescript
function greet(person: string | number) {
  if (typeof person === "string") {
    console.log(`Hello, ${person}!`);
  } else {
    console.log(`Hello, person number ${person}!`);
  }
}

greet("Sakib"); // Output: Hello, Sakib!
greet(25); // Output: Hello, person number 25!
```

In the example above, the greet function accepts both a string and a number type for the person argument.

## Intersection Types (`&`)

An **intersection** type combines multiple types into one. This allows a variable to have the properties of all the types combined.

### Example:

```typescript
interface Person {
  name: string;
  age: number;
}

interface Address {
  city: string;
  country: string;
}

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: "Sakib",
  age: 24,
  city: "Dhaka",
  country: "Bangladesh",
};
```

Here, the PersonWithAddress type combines both Person and Address, meaning the object has all properties from both types.

## Conclusion

**Union** and **intersection** types in TypeScript help make your code more flexible and safe. They reduce errors and ensure that your variables behave as expected. By using these types, you can manage different types of data more easily while keeping your code clean and reliable.
