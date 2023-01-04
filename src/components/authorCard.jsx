function AuthorCard({ author }) {
    return (
        <div
            className='absolute bottom-0 left-0 p-6'
            style={{ fontFamily: 'Oswald Light', cursor: 'pointer' }}
        >
            <h2 className='text-white mb-2'>{author.name},</h2>
            <p className='text-white '>{author.occupation}</p>
        </div>
    );
}

export default AuthorCard;