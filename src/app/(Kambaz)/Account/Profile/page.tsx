"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import * as client from "../client";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const fetchProfile = () => {
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }
    setProfile(currentUser);
  };
  
  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
    } catch (err) {
      console.error(err);
    }
  };
  
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/Account/Signin");
  };
  
  useEffect(() => {
    fetchProfile();
  }, []);
  
  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <Form.Control
            defaultValue={profile.username}
            id="wd-username"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <Form.Control
            defaultValue={profile.password}
            id="wd-password"
            className="mb-2"
            type="password"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <Form.Control
            defaultValue={profile.firstName}
            id="wd-firstname"
            className="mb-2"
            placeholder="First Name"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <Form.Control
            defaultValue={profile.lastName}
            id="wd-lastname"
            className="mb-2"
            placeholder="Last Name"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <Form.Control
            defaultValue={profile.dob}
            id="wd-dob"
            className="mb-2"
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <Form.Control
            defaultValue={profile.email}
            id="wd-email"
            className="mb-2"
            type="email"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <Form.Select
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="mb-2"
            id="wd-role"
            value={profile.role || "USER"}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
          <Button onClick={updateProfile} className="w-100 mb-2" id="wd-update-btn">
            Update
          </Button>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn" variant="danger">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}