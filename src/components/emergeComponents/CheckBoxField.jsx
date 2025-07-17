export default function CheckBoxField({id, label, checked, onChange}){
    return (
        <div className="flex items-start">
        <div className="flex items-center h-7">
            <input
                id={id}
                name={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="focus:ring-fuchsia-500 h-6 w-6 text-fuchsia-600 bg-gray-800 border-gray-700 rounded"
            />
        </div>
        <div className="ml-4 text-xl">
            <label htmlFor={id} className="font-medium text-gray-200">{label}</label>
        </div>
    </div>
    )
}