export default function CheckBoxField({id, label, checked, onChange}){
    return (
        <div className="flex items-start">
            <div className="flex items-center h-5">
                <input
                    id={id}
                    name={id}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 bg-zinc-800 border-zinc-700 rounded"
                />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor={id} className="font-medium text-gray-200">{label}</label>
            </div>
        </div>
    )
}