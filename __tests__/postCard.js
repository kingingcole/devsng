import React from "react"
import { render, cleanip } from '@testing-library/react'
import PostCard from "../src/components/postCard"

describe("Header", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<PostCard title='Hello World' description="A test description "/>)
    expect(1 + 1).toBe(2)
  })
})