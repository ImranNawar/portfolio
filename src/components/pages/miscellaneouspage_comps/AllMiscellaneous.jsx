import React from 'react'

// Example gallery items (replace filenames with your actual images in /public/images/gallery)
const galleryItems = [
  { id: 1, src: '/images/gallery/DIPCar_poster_presentation.jpg', description: 'My respected teachers and honourable Vice Chancellor listening to my work at the poster presentation exhibition at the Department of Computer Science, Islamia College Peshawar', date: 'Aug 18, 2025' },
  { id: 2, src: '/images/gallery/dip_lab.jpg', description: 'A cold December night at DIP Lab, working on converting my FYP work into a research paper', date: 'Dec 27, 2024' },
  { id: 3, src: '/images/gallery/receiving_laptop.jpg', description: 'Receiving laptop at Khyber Union Hall, Islamia College Peshawar', date: 'Feb 19, 2024'},
  { id: 4, src: '/images/gallery/four_years_journey.jpg', description: 'The pens and markers that accompanied me through four years of my Bachelor\'s degree.', date: 'June 6, 2024'},

]

const AllMiscellaneous = () => {
  return (
    <section
      name="Miscellaneous"
      className="relative w-full text-white min-h-screen pt-24 pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">
            Miscellaneous Gallery
          </h2>
          <p className="py-4 text-lg text-gray-300">
            Explore some memorable moments and activities.
          </p>
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map(({ id, src, description, date }) => (
            <div
              key={id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {/* Image */}
              <img
                src={src}
                alt={description}
                className="w-full h-64 object-cover transform duration-300 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center text-center px-4">
                <p className="text-white text-lg">{description}</p>
              </div>

              {/* Date */}
              <div className="bg-black/70 text-white text-sm p-2 text-center">
                {date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllMiscellaneous
