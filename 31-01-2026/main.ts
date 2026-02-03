import { ClassRoom } from "./classRoom"
import { Student } from "./student"

const jsClass = new ClassRoom("Lớp JS Cơ Bản")

const an = new Student("An")
const binh = new Student("Bình")
const chi = new Student("Chi")

jsClass.addStudent(an)
jsClass.addStudent(binh)
jsClass.addStudent(chi)
jsClass.removeStudent(chi)

jsClass.postAnnouncement("Mai kiểm tra OOP")