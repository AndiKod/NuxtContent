

export const useFoo = async () => {


  const articles = await queryContent('articles')
  .sort({ title: 1 })
  .find()


  function chunkArray(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size)
      result.push(chunk)
    }
    return result
  }

  let arrPairs = chunkArray(articles, 2);


  return useState('foo', () => articles)
}