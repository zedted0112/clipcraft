function ClipCard({ clip, isSelected, onSelect }) {
    return (
      <div className={`border rounded-lg p-4 ${isSelected ? 'border-purple-500' : 'border-gray-300'}`}>
        <video src={clip.url} controls className="w-full rounded-md mb-2" />
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={isSelected} onChange={onSelect} />
          <span>Select</span>
        </div>
      </div>
    );
  }
  
  export default ClipCard;