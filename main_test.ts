import { totalPrice, squareNumber } from "./main.ts";
import { assertEquals } from "https://deno.land/std@0.157.0/testing/asserts.ts";

Deno.test("totalPrice should return arg1(unit price) x arg2(quantity)", () => {
  assertEquals(totalPrice(10, 2), 20);
});

Deno.test("15.6 練習問題（３）", () => {
  assertEquals(squareNumber(2), 4);
});
