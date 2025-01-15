const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/dhrumilgandhi');
    const data = await res.json();
    return data;

}
export  {
    githubInfoLoader
}