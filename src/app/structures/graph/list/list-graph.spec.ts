import { ListGraph } from './list-graph';

describe('ListGraph', () => {

  let vertices: number[];
  let graph: ListGraph<number>;

  describe('Undirected graphs', () => {
    
    beforeEach(() => {
      vertices = [1, 2, 3, 4, 5, 6];
      graph = new ListGraph<number>(vertices);
    });

    it('should store each vertex', () => {
      for (let i = 0; i < vertices.length; i++) {
        expect(graph.hasVertex(vertices[i])).toBeTrue();
      }
    });

    it('should throw an error if an edge is attempted to be added with a vertex that does not exist', () => {
      let fn: Function = () => { graph.addEdge(1, 7) };
      expect(fn).toThrow(new Error("7 is not a vertex stored in this graph"));
    });

    it('should add an edge for each direction from the first and second vertex', () => {
      graph.addEdge(1, 6);
      expect(graph.hasEdge(1, 6)).toBeTrue();
      expect(graph.hasEdge(6, 1)).toBeTrue();
    });

  });

});
