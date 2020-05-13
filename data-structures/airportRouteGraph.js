/* Implement an algorithm to see if there is a route between two airports */

class AirportRouteGraph {
  constructor(airports, routes) {
    this.adjacencyList = new Map();
    this.addAirports(airports);
    this.addRoutes(routes);
  }

  addNode(airport) {
    this.adjacencyList.set(airport, []);
  }

  addEdge(origin, destination) {
    this.adjacencyList.get(origin).push(destination);
    this.adjacencyList.get(destination).push(origin);
  }

  addAirports(airports) {
    airports.forEach(airport => this.addNode(airport));
  }

  addRoutes(routes) { 
    routes.forEach(route => this.addEdge(...route));
  }

  bfs(start, end) {
    const queue = [start];
    const visited = new Set(queue);

    while (queue.length > 0) {
      const airport = queue.shift();
      const destinations = this.adjacencyList.get(airport);

      for (let destination of destinations) {
        if (destination === end) return true;

        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push(destination);
        };
      }
    }

    return false;
  }

  dfs(start, end, visited = new Set()) {
    visited.add(start);
    const destinations = this.adjacencyList.get(start);

    for (let destination of destinations) {
      if (destination === end) return true;

      if (!visited.has(destination)) {
        return this.dfs(destination, end, visited);
      };
    }

    return false;
  }
};

const airports = [
  'PHX', 'BKK', 'OKC',
  'JFK', 'LAX', 'MEX',
  'EZE', 'HEL', 'LOS',
  'LAP', 'LIM'
];

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

const airportRouteGraph = new AirportRouteGraph(airports, routes);

console.log('***bfs***')
console.log(airportRouteGraph.bfs('PHX', 'BKK'));
console.log(airportRouteGraph.bfs('PHX', 'LAP'));
console.log('***dfs***')
console.log(airportRouteGraph.dfs('PHX', 'BKK'));
console.log(airportRouteGraph.dfs('PHX', 'LAP'));