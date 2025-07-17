export default function InputField({id,label,placeholder,value,onChange, type="text",required=true, optional=false}){
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
                {label} {optional && <span className="text-gray-400">(optional)</span>}
            </label>
            <input 
                type={type}
                id={id}
                name={id}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    )
}