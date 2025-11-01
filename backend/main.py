from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post("/pipelines/parse")
async def parse_pipeline(request: Request):
    data = await request.json()
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    is_valid_dag = is_dag(nodes, edges)
    return {
        "status": "parsed",
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": is_valid_dag
}

def is_dag(nodes, edges):
    graph = {node["id"]: [] for node in nodes}
    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        if source in graph:
            graph[source].append(target)

    visited = set()
    rec_stack = set()

    def dfs(node):
        if node not in visited:
            visited.add(node)
            rec_stack.add(node)
            for neighbor in graph.get(node, []):  # safer: get empty list if node not in graph
                if neighbor not in visited and dfs(neighbor):
                    return True
                elif neighbor in rec_stack:
                    return True
        rec_stack.discard(node)  # <- use discard instead of remove
        return False


    return not any(dfs(node) for node in graph)

