import CreateCourseGuide from "./CreateCourseGuide"
import UploadVideo from './UploadVideo'
import CourseInfo from './CourseInfo'
import { useSelector, useDispatch } from 'react-redux';

export default function CreateCourse() {
  const uploadVideo = useSelector(state => state.CreatingCourse.uploadVideo)
  const uploadCourseInfo = useSelector(state => state.CreatingCourse.uploadCourseInfo )

  return (
    <>
   <CreateCourseGuide />
    </>
  )
}
