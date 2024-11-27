function limitWords(text, limit) {
  if (!text) return '';
  const words = text.split(' ');
  if (words.length <= limit) return text;
  return `${words.slice(0, limit).join(' ')}...`;
}
export default limitWords;
