let colleges = [
    {
      name: "Sant Kabir Vidyapeeth Mahavidyalaya, Sant Kabir Nagar",
      location: "Sant Kabir Nagar, Uttar Pradesh",
      courses: [
        {
          name: "Bachelor of Education [B.Ed]",
          duration: "1 year",
          fees: "&#x20b9; 51,250 year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Science [B.Sc]",
          duration: "3 Years",
          fees: "&#x20b9; 4,529 per year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Arts [BA]",
          duration: "3 Years",
          fees: "&#x20b9;  4,049 per year",
          packages: "Placement assistance available",
        },
      ],
      image: "skcoll.jpg",
      description: "More About College.",
    },
    {
      name: "Deen Dayal Rustagi College of Management And Technology",
      location: " Gurgaon, Haryana",
      courses: [
        {
          name: "Master of Business Administration [MBA]",
          duration: "2 Years",
          fees: "&#x20b9; 86,250 year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Business Administration [BBA]",
          duration: "3 Years",
          fees: "&#x20b9; 115,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Computer Applications [BCA]",
          duration: "3 Years",
          fees: "&#x20b9;  115,000 per year",
          packages: "Placement assistance available",
        },
      ],
      image: "DDRCMT.png",
      description: "More About College.",
    },
    {
      name: "Sushant University",
      location: "Gurgaon, Haryana",
      courses: [
        {
          name: "Bachelor of Technology [B.tech]",
          duration: "4 Years",
          fees: "&#x20b9; 202,540 year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Science [BSc]",
          duration: "4 Years",
          fees: "&#x20b9; 128,120 per year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Science [B.Sc] (Computer Science)",
          duration: "3 Years",
          fees: "&#x20b9; 161,120 per year",
          packages: "Placement assistance available",
        },
        {
          name: "Master of Business Administration [MBA]",
          duration: "2 Years",
          fees: "&#x20b9; 325,640 per year",
          packages: "Placement assistance available",
        },
      ],
      image: "sushant.avif",
      description: "More About College.",
    },
    {
      name: "Trinity Institute of Technology and Research",
      location: "Bhopal, Madhya Pradesh",
      courses: [
        {
          name: "Bachelor of Technology [B.Tech]",
          duration: "4 Years",
          fees: "&#x20b9; 53,000 year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Education [B.Ed]",
          duration: "2 Years",
          fees: "&#x20b9; 40,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "Diploma in Engineering (Polytechnic)",
          duration: "3 Years",
          fees: "&#x20b9; 24,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Science [BSc]",
          duration: "3 Years",
          fees: "&#x20b9; 12,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "Master of Technology [M.Tech]",
          duration: "2 Years",
          fees: "&#x20b9; 60,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Commerce [BCom]",
          duration: "3 Years",
          fees: "&#x20b9; 10,000 per year",
          packages: "Placement assistance available",
        },
      ],
      image: "trinity.jpg",
      description: "More About College.",
    },
    {
      name: "IITM Janakpuri: Courses, Fee, Admission, Placements",
      location: "New Delhi, Delhi NCR ",
      courses: [
        {
          name: "Bachelor of Business Administration [BBA]",
          duration: "3 Years",
          fees: "&#x20b9; 115,000 year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Technology [B.Tech]",
          duration: "4 Years",
          fees: "&#x20b9; 125,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Computer Applications [BCA]",
          duration: "3 Years",
          fees: "&#x20b9; 115,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "Bachelor of Technology [B.Tech] {Lateral} (Computer Science & Engineering)",
          duration: "3 Years",
          fees: "&#x20b9; 125,000 per year",
          packages: "Placement assistance available",
        },
      ],
      image: "iitm.jpg",
      description: "More About College.",
    },
    {
      name: "Delhi Institute of Technology & Management - [DITM], Sonepat",
      location: "Sant Sonepat, Haryana",
      courses: [
        {
          name: "B.Tech",
          duration: "4 years",
          fees: "&#x20b9; 127,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "MBA",
          duration: "2 Years",
          fees: "&#x20b9; 97,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "BBA",
          duration: "3 Years",
          fees: "&#x20b9; 97,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "B.Tech {Lateral}",
          duration: "3 Years",
          fees: "&#x20b9; 127,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "Polytechnic",
          duration: "3 Years",
          fees: "&#x20b9; 41,000 per year",
          packages: "Placement assistance available",
        },
        {
          name: "B.Com {Hons.}",
          duration: "3 Years",
          fees: "&#x20b9; 97,000 per year",
          packages: "Placement assistance available",
        },
      ],
      image: "ditm.jpeg",
      description: "More About College.",
    },
  ];

  const collegeDetails = {};
  colleges.forEach((college) => {
    collegeDetails[college.name] = {
      courses: college.courses,
      otherDetails: college.description,
    };
  });

  function createCollegeCard(college) {
    const card = document.createElement("div");
    card.classList.add("college-card");

    const image = document.createElement("img");
    image.src = college.image;
    image.alt = college.name;
    image.classList.add("college-image");
    card.appendChild(image);

    const details = document.createElement("div");
    details.classList.add("college-details");

    const coursesTable = document.createElement("table");
    coursesTable.innerHTML = `
      <tr>
        <th>Course</th>
        <th>Duration</th>
        <th>Fees</th>
        <th>Packages</th>
      </tr>
      ${college.courses
        .map(
          (course) => `<tr>
            <td>${course.name}</td>
            <td>${course.duration}</td>
            <td>${course.fees}</td>
            <td>${course.packages}</td>
          </tr>`
        )
        .join("")}
    `;
    details.appendChild(coursesTable);

    details.innerHTML += `<p><strong>Location:</strong> ${college.location}</p>
      <a class="arrow-link" href="/make.html" onclick="redirectToDetails('${
      college.name
    }')">&#10148; Details</a>`;

    card.appendChild(details);

    return card;
  }

  function redirectToDetails(collegeName) {
    window.location.href = `#detailsContainer?college=${encodeURIComponent(
      collegeName
    )}`;
  }

  function getCollegeName() {
    const urlParams = new URLSearchParams(window.location.hash);
    return urlParams.get("college");
  }

  function displayCollegeDetails() {
    const collegeName = getCollegeName();
    const detailsContainer = document.getElementById("detailsContainer");

    if (collegeName && collegeDetails[collegeName]) {
      const details = collegeDetails[collegeName];

      detailsContainer.innerHTML = `
        <h2>${collegeName}</h2>
        <p><strong>Courses:</strong> ${details.courses
          .map((course) => `${course.name} (${course.duration})`)
          .join(", ")}</p>
        <p><strong>Other Details:</strong> ${details.otherDetails}</p>
      `;
    } else {
      detailsContainer.innerHTML = "";
    }
  }

  function displayColleges() {
    const collegeContainer = document.getElementById("collegeContainer");
    colleges.forEach((college) => {
      const card = createCollegeCard(college);
      collegeContainer.appendChild(card);
    });
  }

  displayColleges();
  displayCollegeDetails();
