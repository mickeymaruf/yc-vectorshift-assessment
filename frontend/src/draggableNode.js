// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = "grabbing"
    event.dataTransfer.setData("application/reactflow", JSON.stringify(appData))
    event.dataTransfer.effectAllowed = "move"
  }

  return (
    <div
      className={`flex flex-col items-center justify-center w-20 h-22 rounded-xl bg-white shadow-sm border border-gray-200 hover:shadow-md hover:bg-gray-100 cursor-grab transition-all ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <div className="text-gray-700">{icon}</div>
      <span className="text-sm font-medium text-gray-800 mt-1">{label}</span>
    </div>
  )
}
