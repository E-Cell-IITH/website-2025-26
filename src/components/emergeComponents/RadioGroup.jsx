export default function RadioGroup({ name, legend, options, selectedValue, onChange }){
    return (
        <div>
        <legend className="block text-xl font-medium text-gray-300 mb-4">{legend}</legend>
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
            {options.map(option => (
                <div key={option.value} className="flex items-center">
                    <input
                        id={`${name}-${option.value}`}
                        name={name}
                        type="radio"
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={onChange}
                        className="h-6 w-6 text-fuchsia-600 bg-gray-700 border-gray-600 focus:ring-fuchsia-500"
                    />
                    <label htmlFor={`${name}-${option.value}`} className="ml-4 block text-xl text-gray-200">
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    </div>
    )
}