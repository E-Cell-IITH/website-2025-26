export default function RadioGroup({ name, legend, options, selectedValue, onChange }){
    return (
        <div>
            <legend className="block text-sm font-medium text-gray-300 mb-2">{legend}</legend>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                {options.map(option => (
                    <div key={option.value} className="flex items-center">
                        <input
                            id={`${name}-${option.value}`}
                            name={name}
                            type="radio"
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={onChange}
                            className="h-4 w-4 text-blue-600 bg-zinc-700 border-zinc-600 focus:ring-blue-500"
                        />
                        <label htmlFor={`${name}-${option.value}`} className="ml-3 block text-sm text-gray-200">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}