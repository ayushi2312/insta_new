backend/
├── auth-service/               # Authentication (JWT, login/signup)
│   ├── package.json
│   ├── server.js               # Entry point
│   ├── routes/
│   │   └── authRoutes.js
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── User.js
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT verification
│   └── utils/
│       └── tokenUtils.js
│
├── user-service/               # Profiles, follow/follower logic
│   ├── package.json
│   ├── server.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── UserProfile.js
│   └── utils/
│       └── helpers.js
│
├── post-service/               # Posts, likes, comments
│   ├── package.json
│   ├── server.js
│   ├── routes/
│   │   └── postRoutes.js
│   ├── controllers/
│   │   └── postController.js
│   ├── models/
│   │   └── Post.js
│   └── utils/
│       └── helpers.js
│
├── media-service/              # Media uploads/downloads
│   ├── package.json
│   ├── server.js
│   ├── routes/
│   │   └── mediaRoutes.js
│   ├── controllers/
│   │   └── mediaController.js
│   ├── models/
│   │   └── Media.js
│   └── utils/
│       └── storageUtils.js
│
└── shared/                     # Code shared across services
    ├── config/
    │   └── db.js               # Database connection
    ├── middleware/
    │   └── errorHandler.js
    └── utils/
        └── logger.js