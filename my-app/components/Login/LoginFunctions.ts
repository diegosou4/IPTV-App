

export function handleChange(event : any, setValue : React.Dispatch<React.SetStateAction<string>>) {
  event.preventDefault();
  setValue(event.nativeEvent.text);
  console.log(event.nativeEvent.text);
}