the_most_dangerous_graph = {
    'lava': set(['sharks', 'piranhas']),
    'sharks': set(['lava', 'bees', 'lasers']),
    'piranhas': set(['lava', 'crocodiles']),
    'bees': set(['sharks']),
    'lasers': set(['sharks', 'crocodiles']),
    'crocodiles': set(['piranhas', 'lasers'])
  }

def bfs(graph, start_vertex, target_value):
  path = [start_vertex]
  vertex_and_path = [start_vertex, path]
  bfs_queue = [vertex_and_path]
  visited = set()
  print("""Initial : Path :{}
  vertex_and_path :{}
  bfs_queue :{}
  visited :{}""".format(path, vertex_and_path, bfs_queue, visited))
  
  while bfs_queue:
    current_vertex, path = bfs_queue.pop(0)
    visited.add(current_vertex)
    
    for neighbor in graph[current_vertex]:
      # Finish the function here:
      if neighbor not in visited:
        if neighbor is target_value:
          return path + [neighbor]
        else:
          bfs_queue.append([neighbor, path + [neighbor]])
        print("""\nPath :{}
  current_vertex :{}
  bfs_queue :{}
  visited :{}\n""".format(path, current_vertex, bfs_queue, visited))
      
# Call bfs() below and print the result:
print(bfs(the_most_dangerous_graph, "crocodiles", "bees"))