
async function VideoCardPage() {
    const videoCard = await fetchPcParts('Video Card');

const CPUPage = () => {
    return (
        <div>
            <Videocard videoCard={videoCard} />
        </div>
    );
};

export default CPUPage;