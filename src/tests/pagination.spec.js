import React from "react";
import { expect } from "chai";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Pagination from "../components/Pagination";

describe("Pagination Component", () => {

  describe("Calculates the pagination correctly", () => {
          
    it("With 60 Pokemons and 12 per page", () => {
      const wrapper = shallow(
        <Pagination pokemonsByPage={12} totalPokemons={60} />
      );
      expect(wrapper.find("a")).to.have.length(5);
    });
    it("With 160 Pokemons and 16 per page", () => {
      const wrapper = shallow(
        <Pagination pokemonsByPage={16} totalPokemons={160} />
      );
      expect(wrapper.find("a")).to.have.length(10);
    });
    it("With 1 Pokemon and 10 per page", () => {
      const wrapper = shallow(
        <Pagination pokemonsByPage={10} totalPokemons={1} />
      );
      expect(wrapper.find("a")).to.have.length(1);
    });
  });
});
