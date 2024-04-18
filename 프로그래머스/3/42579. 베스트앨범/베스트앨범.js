function solution(genres, plays) {
    const answer = [];

    const genreMap = new Map();

    genres.forEach((genre, index) => {
        if (genreMap.has(genre)) {
            genreMap.get(genre).push({ index, play: plays[index] });
        } else {
            genreMap.set(genre, [{ index, play: plays[index] }]);
        }
    });
    
    genreMap.forEach((genrePlays, genre) => {
        genrePlays.sort((a, b) => b.play - a.play)
        const totalPlay = genrePlays.reduce((acc, curr) => acc + curr.play, 0)
        const selectPlays = genrePlays.filter(({index: key, play}, i) => i < 2)
        
        answer.push({ totalPlay, selectPlays })
    })
    
    answer.sort((a, b) => b.totalPlay - a.totalPlay)

    return answer.map(({ selectPlays }) => selectPlays.map(({ index }) => index )).flat();
}