const isAdmin = async (req, res, next) => {
  try {
    if (req.user?.role !== "admin") {
      return res.status(403).json({ message: "Access forbidden tum admin nahi ho" });
    }
    next(); // agar admin hai to aage jao
  } catch (error) {
    res.status(500).json({ message: "Server error no admin", error });
  }
};

module.exports = isAdmin;