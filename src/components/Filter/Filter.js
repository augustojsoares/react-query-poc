// very simple example. Can be extended to handle more complex cases
export default function Filter({ filter, setFilter, placeholder }) {
  const handleOnChange = ({ target: { value } }) => {
    setFilter(value)
  }

  return <input value={filter} placeholder={placeholder} onChange={handleOnChange} />
}
