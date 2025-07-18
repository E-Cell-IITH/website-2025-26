export default function InputField({id,label,placeholder,value,onChange, type="text",required=true, optional=false}){
    return (
        <div>
        <label htmlFor={id} className="block text-xl font-medium text-gray-300 mb-3">
            {label} {optional && <span className="text-gray-400">(optional)</span>}
        </label>
        <input
            type={type}
            id={id}
            name={id}
            className="w-full px-6 py-4 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 transition text-xl"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />

    </div>
    )
}