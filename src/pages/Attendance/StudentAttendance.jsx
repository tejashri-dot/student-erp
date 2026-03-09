import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Avatar,
  Tooltip,
  TablePagination,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

// Dummy data for all classes (10 students per class)
const dummyStudentData = {
  Nursery: [
    {
      _id: "n1",
      name: "Aryan Sharma",
      seatNumber: 1,
      gender: "boy",
      className: "Nursery",
    },
    {
      _id: "n2",
      name: "Priya Patel",
      seatNumber: 2,
      gender: "girl",
      className: "Nursery",
    },
    {
      _id: "n3",
      name: "Rahul Verma",
      seatNumber: 3,
      gender: "boy",
      className: "Nursery",
    },
    {
      _id: "n4",
      name: "Ananya Gupta",
      seatNumber: 4,
      gender: "girl",
      className: "Nursery",
    },
    {
      _id: "n5",
      name: "Vikram Singh",
      seatNumber: 5,
      gender: "boy",
      className: "Nursery",
    },
    {
      _id: "n6",
      name: "Sneha Reddy",
      seatNumber: 6,
      gender: "girl",
      className: "Nursery",
    },
    {
      _id: "n7",
      name: "Aditya Kumar",
      seatNumber: 7,
      gender: "boy",
      className: "Nursery",
    },
    {
      _id: "n8",
      name: "Kavya Iyer",
      seatNumber: 8,
      gender: "girl",
      className: "Nursery",
    },
    {
      _id: "n9",
      name: "Rohan Mehta",
      seatNumber: 9,
      gender: "boy",
      className: "Nursery",
    },
    {
      _id: "n10",
      name: "Diya Shah",
      seatNumber: 10,
      gender: "girl",
      className: "Nursery",
    },
  ],
  LKG: [
    {
      _id: "l1",
      name: "Arjun Nair",
      seatNumber: 1,
      gender: "boy",
      className: "LKG",
    },
    {
      _id: "l2",
      name: "Myra Das",
      seatNumber: 2,
      gender: "girl",
      className: "LKG",
    },
    {
      _id: "l3",
      name: "Karthik R",
      seatNumber: 3,
      gender: "boy",
      className: "LKG",
    },
    {
      _id: "l4",
      name: "Avni Sharma",
      seatNumber: 4,
      gender: "girl",
      className: "LKG",
    },
    {
      _id: "l5",
      name: "Dev Patel",
      seatNumber: 5,
      gender: "boy",
      className: "LKG",
    },
    {
      _id: "l6",
      name: "Riya Menon",
      seatNumber: 6,
      gender: "girl",
      className: "LKG",
    },
    {
      _id: "l7",
      name: "Ishaan K",
      seatNumber: 7,
      gender: "boy",
      className: "LKG",
    },
    {
      _id: "l8",
      name: "Aadhya Rao",
      seatNumber: 8,
      gender: "girl",
      className: "LKG",
    },
    {
      _id: "l9",
      name: "Arnav Singh",
      seatNumber: 9,
      gender: "boy",
      className: "LKG",
    },
    {
      _id: "l10",
      name: "Kiara Verma",
      seatNumber: 10,
      gender: "girl",
      className: "LKG",
    },
  ],
  UKG: [
    {
      _id: "u1",
      name: "Raj Malhotra",
      seatNumber: 1,
      gender: "boy",
      className: "UKG",
    },
    {
      _id: "u2",
      name: "Zara Ahmed",
      seatNumber: 2,
      gender: "girl",
      className: "UKG",
    },
    {
      _id: "u3",
      name: "Armaan Khan",
      seatNumber: 3,
      gender: "boy",
      className: "UKG",
    },
    {
      _id: "u4",
      name: "Sara Qureshi",
      seatNumber: 4,
      gender: "girl",
      className: "UKG",
    },
    {
      _id: "u5",
      name: "Yash Joshi",
      seatNumber: 5,
      gender: "boy",
      className: "UKG",
    },
    {
      _id: "u6",
      name: "Nisha Bhatia",
      seatNumber: 6,
      gender: "girl",
      className: "UKG",
    },
    {
      _id: "u7",
      name: "Kabir Sharma",
      seatNumber: 7,
      gender: "boy",
      className: "UKG",
    },
    {
      _id: "u8",
      name: "Ira Trivedi",
      seatNumber: 8,
      gender: "girl",
      className: "UKG",
    },
    {
      _id: "u9",
      name: "Veer Patel",
      seatNumber: 9,
      gender: "boy",
      className: "UKG",
    },
    {
      _id: "u10",
      name: "Tara Iyer",
      seatNumber: 10,
      gender: "girl",
      className: "UKG",
    },
  ],
  "1st": [
    {
      _id: "1s1",
      name: "Dhruv Kapoor",
      seatNumber: 1,
      gender: "boy",
      className: "1st",
    },
    {
      _id: "1s2",
      name: "Aanya Singh",
      seatNumber: 2,
      gender: "girl",
      className: "1st",
    },
    {
      _id: "1s3",
      name: "Shaurya Raj",
      seatNumber: 3,
      gender: "boy",
      className: "1st",
    },
    {
      _id: "1s4",
      name: "Prisha Gupta",
      seatNumber: 4,
      gender: "girl",
      className: "1st",
    },
    {
      _id: "1s5",
      name: "Atharv Kumar",
      seatNumber: 5,
      gender: "boy",
      className: "1st",
    },
    {
      _id: "1s6",
      name: "Vihana Reddy",
      seatNumber: 6,
      gender: "girl",
      className: "1st",
    },
    {
      _id: "1s7",
      name: "Rudra Shah",
      seatNumber: 7,
      gender: "boy",
      className: "1st",
    },
    {
      _id: "1s8",
      name: "Anika Sharma",
      seatNumber: 8,
      gender: "girl",
      className: "1st",
    },
    {
      _id: "1s9",
      name: "Vivaan Rao",
      seatNumber: 9,
      gender: "boy",
      className: "1st",
    },
    {
      _id: "1s10",
      name: "Sia Patel",
      seatNumber: 10,
      gender: "girl",
      className: "1st",
    },
  ],
  "2nd": [
    {
      _id: "2s1",
      name: "Reyansh Mehta",
      seatNumber: 1,
      gender: "boy",
      className: "2nd",
    },
    {
      _id: "2s2",
      name: "Aadhya Joshi",
      seatNumber: 2,
      gender: "girl",
      className: "2nd",
    },
    {
      _id: "2s3",
      name: "Ayaan Khan",
      seatNumber: 3,
      gender: "boy",
      className: "2nd",
    },
    {
      _id: "2s4",
      name: "Diya Sharma",
      seatNumber: 4,
      gender: "girl",
      className: "2nd",
    },
    {
      _id: "2s5",
      name: "Shivansh R",
      seatNumber: 5,
      gender: "boy",
      className: "2nd",
    },
    {
      _id: "2s6",
      name: "Navya Singh",
      seatNumber: 6,
      gender: "girl",
      className: "2nd",
    },
    {
      _id: "2s7",
      name: "Pranav Nair",
      seatNumber: 7,
      gender: "boy",
      className: "2nd",
    },
    {
      _id: "2s8",
      name: "Kriti Iyer",
      seatNumber: 8,
      gender: "girl",
      className: "2nd",
    },
    {
      _id: "2s9",
      name: "Arin Gupta",
      seatNumber: 9,
      gender: "boy",
      className: "2nd",
    },
    {
      _id: "2s10",
      name: "Rhea Shah",
      seatNumber: 10,
      gender: "girl",
      className: "2nd",
    },
  ],
  "3rd": [
    {
      _id: "3s1",
      name: "Krishna Bhatt",
      seatNumber: 1,
      gender: "boy",
      className: "3rd",
    },
    {
      _id: "3s2",
      name: "Ananya Rao",
      seatNumber: 2,
      gender: "girl",
      className: "3rd",
    },
    {
      _id: "3s3",
      name: "Rohan Kapoor",
      seatNumber: 3,
      gender: "boy",
      className: "3rd",
    },
    {
      _id: "3s4",
      name: "Saanvi Patel",
      seatNumber: 4,
      gender: "girl",
      className: "3rd",
    },
    {
      _id: "3s5",
      name: "Aditya Sharma",
      seatNumber: 5,
      gender: "boy",
      className: "3rd",
    },
    {
      _id: "3s6",
      name: "Myra Nair",
      seatNumber: 6,
      gender: "girl",
      className: "3rd",
    },
    {
      _id: "3s7",
      name: "Vihaan Singh",
      seatNumber: 7,
      gender: "boy",
      className: "3rd",
    },
    {
      _id: "3s8",
      name: "Aaradhya Gupta",
      seatNumber: 8,
      gender: "girl",
      className: "3rd",
    },
    {
      _id: "3s9",
      name: "Sarthak R",
      seatNumber: 9,
      gender: "boy",
      className: "3rd",
    },
    {
      _id: "3s10",
      name: "Kavya Shah",
      seatNumber: 10,
      gender: "girl",
      className: "3rd",
    },
  ],
  "4th": [
    {
      _id: "4s1",
      name: "Vedant Kumar",
      seatNumber: 1,
      gender: "boy",
      className: "4th",
    },
    {
      _id: "4s2",
      name: "Shanaya Reddy",
      seatNumber: 2,
      gender: "girl",
      className: "4th",
    },
    {
      _id: "4s3",
      name: "Aryan Verma",
      seatNumber: 3,
      gender: "boy",
      className: "4th",
    },
    {
      _id: "4s4",
      name: "Aadhira Sharma",
      seatNumber: 4,
      gender: "girl",
      className: "4th",
    },
    {
      _id: "4s5",
      name: "Nakul Patel",
      seatNumber: 5,
      gender: "boy",
      className: "4th",
    },
    {
      _id: "4s6",
      name: "Anya Joshi",
      seatNumber: 6,
      gender: "girl",
      className: "4th",
    },
    {
      _id: "4s7",
      name: "Aarav Nair",
      seatNumber: 7,
      gender: "boy",
      className: "4th",
    },
    {
      _id: "4s8",
      name: "Riya Khan",
      seatNumber: 8,
      gender: "girl",
      className: "4th",
    },
    {
      _id: "4s9",
      name: "Rohan Mehta",
      seatNumber: 9,
      gender: "boy",
      className: "4th",
    },
    {
      _id: "4s10",
      name: "Anika Rao",
      seatNumber: 10,
      gender: "girl",
      className: "4th",
    },
  ],
  "5th": [
    {
      _id: "5s1",
      name: "Raghav Singh",
      seatNumber: 1,
      gender: "boy",
      className: "5th",
    },
    {
      _id: "5s2",
      name: "Vivaan Dua",
      seatNumber: 2,
      gender: "boy",
      className: "5th",
    },
    {
      _id: "5s3",
      name: "Anika Gupta",
      seatNumber: 3,
      gender: "girl",
      className: "5th",
    },
    {
      _id: "5s4",
      name: "Dev Sharma",
      seatNumber: 4,
      gender: "boy",
      className: "5th",
    },
    {
      _id: "5s5",
      name: "Saanvi Patel",
      seatNumber: 5,
      gender: "girl",
      className: "5th",
    },
    {
      _id: "5s6",
      name: "Krishiv K",
      seatNumber: 6,
      gender: "boy",
      className: "5th",
    },
    {
      _id: "5s7",
      name: "Diya Rao",
      seatNumber: 7,
      gender: "girl",
      className: "5th",
    },
    {
      _id: "5s8",
      name: "Arnav Shah",
      seatNumber: 8,
      gender: "boy",
      className: "5th",
    },
    {
      _id: "5s9",
      name: "Myra Nair",
      seatNumber: 9,
      gender: "girl",
      className: "5th",
    },
    {
      _id: "5s10",
      name: "Kabir Singh",
      seatNumber: 10,
      gender: "boy",
      className: "5th",
    },
  ],
  "6th": [
    {
      _id: "6s1",
      name: "Harsh Kumar",
      seatNumber: 1,
      gender: "boy",
      className: "6th",
    },
    {
      _id: "6s2",
      name: "Siddharth R",
      seatNumber: 2,
      gender: "boy",
      className: "6th",
    },
    {
      _id: "6s3",
      name: "Ananya Sharma",
      seatNumber: 3,
      gender: "girl",
      className: "6th",
    },
    {
      _id: "6s4",
      name: "Rohan Patel",
      seatNumber: 4,
      gender: "boy",
      className: "6th",
    },
    {
      _id: "6s5",
      name: "Kavya Singh",
      seatNumber: 5,
      gender: "girl",
      className: "6th",
    },
    {
      _id: "6s6",
      name: "Vikram Gupta",
      seatNumber: 6,
      gender: "boy",
      className: "6th",
    },
    {
      _id: "6s7",
      name: "Priya Nair",
      seatNumber: 7,
      gender: "girl",
      className: "6th",
    },
    {
      _id: "6s8",
      name: "Aditya Shah",
      seatNumber: 8,
      gender: "boy",
      className: "6th",
    },
    {
      _id: "6s9",
      name: "Riya Joshi",
      seatNumber: 9,
      gender: "girl",
      className: "6th",
    },
    {
      _id: "6s10",
      name: "Arjun Rao",
      seatNumber: 10,
      gender: "boy",
      className: "6th",
    },
  ],
  "7th": [
    {
      _id: "7s1",
      name: "Kunal Sharma",
      seatNumber: 1,
      gender: "boy",
      className: "7th",
    },
    {
      _id: "7s2",
      name: "Yash Patel",
      seatNumber: 2,
      gender: "boy",
      className: "7th",
    },
    {
      _id: "7s3",
      name: "Aisha Khan",
      seatNumber: 3,
      gender: "girl",
      className: "7th",
    },
    {
      _id: "7s4",
      name: "Nikhil R",
      seatNumber: 4,
      gender: "boy",
      className: "7th",
    },
    {
      _id: "7s5",
      name: "Neha Gupta",
      seatNumber: 5,
      gender: "girl",
      className: "7th",
    },
    {
      _id: "7s6",
      name: "Sahil Singh",
      seatNumber: 6,
      gender: "boy",
      className: "7th",
    },
    {
      _id: "7s7",
      name: "Sonal Shah",
      seatNumber: 7,
      gender: "girl",
      className: "7th",
    },
    {
      _id: "7s8",
      name: "Vicky Nair",
      seatNumber: 8,
      gender: "boy",
      className: "7th",
    },
    {
      _id: "7s9",
      name: "Rashmi Rao",
      seatNumber: 9,
      gender: "girl",
      className: "7th",
    },
    {
      _id: "7s10",
      name: "Rajiv Kumar",
      seatNumber: 10,
      gender: "boy",
      className: "7th",
    },
  ],
  "8th": [
    {
      _id: "8s1",
      name: "Amit Sharma",
      seatNumber: 1,
      gender: "boy",
      className: "8th",
    },
    {
      _id: "8s2",
      name: "Ravi Patel",
      seatNumber: 2,
      gender: "boy",
      className: "8th",
    },
    {
      _id: "8s3",
      name: "Sunita Gupta",
      seatNumber: 3,
      gender: "girl",
      className: "8th",
    },
    {
      _id: "8s4",
      name: "Gaurav Singh",
      seatNumber: 4,
      gender: "boy",
      className: "8th",
    },
    {
      _id: "8s5",
      name: "Pooja Nair",
      seatNumber: 5,
      gender: "girl",
      className: "8th",
    },
    {
      _id: "8s6",
      name: "Sanjay R",
      seatNumber: 6,
      gender: "boy",
      className: "8th",
    },
    {
      _id: "8s7",
      name: "Anjali Shah",
      seatNumber: 7,
      gender: "girl",
      className: "8th",
    },
    {
      _id: "8s8",
      name: "Deepak Kumar",
      seatNumber: 8,
      gender: "boy",
      className: "8th",
    },
    {
      _id: "8s9",
      name: "Rekha Joshi",
      seatNumber: 9,
      gender: "girl",
      className: "8th",
    },
    {
      _id: "8s10",
      name: "Vijay Rao",
      seatNumber: 10,
      gender: "boy",
      className: "8th",
    },
  ],
  "9th": [
    {
      _id: "9s1",
      name: "Prateek Sharma",
      seatNumber: 1,
      gender: "boy",
      className: "9th",
    },
    {
      _id: "9s2",
      name: "Ashish Patel",
      seatNumber: 2,
      gender: "boy",
      className: "9th",
    },
    {
      _id: "9s3",
      name: "Nidhi Gupta",
      seatNumber: 3,
      gender: "girl",
      className: "9th",
    },
    {
      _id: "9s4",
      name: "Mohit Singh",
      seatNumber: 4,
      gender: "boy",
      className: "9th",
    },
    {
      _id: "9s5",
      name: "Rashika Nair",
      seatNumber: 5,
      gender: "girl",
      className: "9th",
    },
    {
      _id: "9s6",
      name: "Saurabh K",
      seatNumber: 6,
      gender: "boy",
      className: "9th",
    },
    {
      _id: "9s7",
      name: "Shreya Shah",
      seatNumber: 7,
      gender: "girl",
      className: "9th",
    },
    {
      _id: "9s8",
      name: "Ankit Rao",
      seatNumber: 8,
      gender: "boy",
      className: "9th",
    },
    {
      _id: "9s9",
      name: "Tulsi Joshi",
      seatNumber: 9,
      gender: "girl",
      className: "9th",
    },
    {
      _id: "9s10",
      name: "Rohit Kumar",
      seatNumber: 10,
      gender: "boy",
      className: "9th",
    },
  ],
  "10th": [
    {
      _id: "10s1",
      name: "Rajesh Sharma",
      seatNumber: 1,
      gender: "boy",
      className: "10th",
    },
    {
      _id: "10s2",
      name: "Amit Patel",
      seatNumber: 2,
      gender: "boy",
      className: "10th",
    },
    {
      _id: "10s3",
      name: "Richa Singh",
      seatNumber: 3,
      gender: "girl",
      className: "10th",
    },
    {
      _id: "10s4",
      name: "Vikram Gupta",
      seatNumber: 4,
      gender: "boy",
      className: "10th",
    },
    {
      _id: "10s5",
      name: "Sunidhi Nair",
      seatNumber: 5,
      gender: "girl",
      className: "10th",
    },
    {
      _id: "10s6",
      name: "Praveen R",
      seatNumber: 6,
      gender: "boy",
      className: "10th",
    },
    {
      _id: "10s7",
      name: "Medha Shah",
      seatNumber: 7,
      gender: "girl",
      className: "10th",
    },
    {
      _id: "10s8",
      name: "Sanjay Kumar",
      seatNumber: 8,
      gender: "boy",
      className: "10th",
    },
    {
      _id: "10s9",
      name: "Aishwarya Rao",
      seatNumber: 9,
      gender: "girl",
      className: "10th",
    },
    {
      _id: "10s10",
      name: "Harish Joshi",
      seatNumber: 10,
      gender: "boy",
      className: "10th",
    },
  ],
  "11th": [
    {
      _id: "11s1",
      name: "Akhil Sharma",
      seatNumber: 1,
      gender: "boy",
      className: "11th",
    },
    {
      _id: "11s2",
      name: "Rahul Patel",
      seatNumber: 2,
      gender: "boy",
      className: "11th",
    },
    {
      _id: "11s3",
      name: "Sneha Gupta",
      seatNumber: 3,
      gender: "girl",
      className: "11th",
    },
    {
      _id: "11s4",
      name: "Varun Singh",
      seatNumber: 4,
      gender: "boy",
      className: "11th",
    },
    {
      _id: "11s5",
      name: "Mona Nair",
      seatNumber: 5,
      gender: "girl",
      className: "11th",
    },
    {
      _id: "11s6",
      name: "Arun Kumar",
      seatNumber: 6,
      gender: "boy",
      className: "11th",
    },
    {
      _id: "11s7",
      name: "Divya Shah",
      seatNumber: 7,
      gender: "girl",
      className: "11th",
    },
    {
      _id: "11s8",
      name: "Naveen R",
      seatNumber: 8,
      gender: "boy",
      className: "11th",
    },
    {
      _id: "11s9",
      name: "Anu Rao",
      seatNumber: 9,
      gender: "girl",
      className: "11th",
    },
    {
      _id: "11s10",
      name: "Jeevan Joshi",
      seatNumber: 10,
      gender: "boy",
      className: "11th",
    },
  ],
  "12th": [
    {
      _id: "12s1",
      name: "Ajay Sharma",
      seatNumber: 1,
      gender: "boy",
      className: "12th",
    },
    {
      _id: "12s2",
      name: "Vijay Patel",
      seatNumber: 2,
      gender: "boy",
      className: "12th",
    },
    {
      _id: "12s3",
      name: "Kavita Singh",
      seatNumber: 3,
      gender: "girl",
      className: "12th",
    },
    {
      _id: "12s4",
      name: "Rakesh Gupta",
      seatNumber: 4,
      gender: "boy",
      className: "12th",
    },
    {
      _id: "12s5",
      name: "Lakshmi Nair",
      seatNumber: 5,
      gender: "girl",
      className: "12th",
    },
    {
      _id: "12s6",
      name: "Suresh K",
      seatNumber: 6,
      gender: "boy",
      className: "12th",
    },
    {
      _id: "12s7",
      name: "Usha Shah",
      seatNumber: 7,
      gender: "girl",
      className: "12th",
    },
    {
      _id: "12s8",
      name: "Ramesh Rao",
      seatNumber: 8,
      gender: "boy",
      className: "12th",
    },
    {
      _id: "12s9",
      name: "Padma Joshi",
      seatNumber: 9,
      gender: "girl",
      className: "12th",
    },
    {
      _id: "12s10",
      name: "Dinesh Kumar",
      seatNumber: 10,
      gender: "boy",
      className: "12th",
    },
  ],
};

const styles = {
  container: {
    padding: "24px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  header: {
    marginBottom: "24px",
    color: "#1a237e",
    fontWeight: "600",
  },
  selectSection: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "24px",
  },
  tableContainer: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  tableHead: {
    backgroundColor: "#1a237e",
    "& th": {
      color: "white",
      fontWeight: "600",
      fontSize: "14px",
      padding: "16px",
    },
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
    "& td": {
      padding: "12px 16px",
      borderBottom: "1px solid #e0e0e0",
    },
  },
  avatar: {
    backgroundColor: "#e3f2fd",
    width: "40px",
    height: "40px",
  },
  presentBtn: {
    backgroundColor: "#4caf50",
    color: "white",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
    minWidth: "70px",
  },
  absentBtn: {
    backgroundColor: "#f44336",
    color: "white",
    "&:hover": {
      backgroundColor: "#d32f2f",
    },
    minWidth: "70px",
  },
  editBtn: {
    color: "#1976d2",
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  },
  deleteBtn: {
    color: "#d32f2f",
    "&:hover": {
      backgroundColor: "#ffebee",
    },
  },
  chipPresent: {
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    fontWeight: "600",
  },
  chipAbsent: {
    backgroundColor: "#ffebee",
    color: "#c62828",
    fontWeight: "600",
  },
  chipNotMarked: {
    backgroundColor: "#fff3e0",
    color: "#e65100",
  },
  infoText: {
    marginBottom: "16px",
    padding: "12px",
    backgroundColor: "#e8eaf6",
    borderRadius: "8px",
    color: "#1a237e",
  },
};

export default function StudentAttendance() {
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [attendanceStatus, setAttendanceStatus] = useState({});
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editStatus, setEditStatus] = useState("");
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const token = localStorage.getItem("token");
  const API_URL = "http://localhost:8080/api";

  // Common class options
  const classOptions = [
    "Nursery",
    "LKG",
    "UKG",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
  ];

  // Fetch students by class
  useEffect(() => {
    if (selectedClass) {
      // Use dummy data (for demo purposes)
      const dummyStudents = dummyStudentData[selectedClass] || [];
      setStudents(dummyStudents);

      // Initialize attendance with some default values for demo
      const initialStatus = {};
      dummyStudents.forEach((student) => {
        // Randomly assign some present/absent for demo
        const randomStatus = Math.random() > 0.2 ? "Present" : "Absent";
        initialStatus[student._id] = randomStatus;
      });
      setAttendanceStatus(initialStatus);
    }
  }, [selectedClass]);

  // Store attendance records for each student
  useEffect(() => {
    if (students.length > 0 && selectedDate) {
      const records = students.map((student) => ({
        studentId: student._id,
        studentName: student.name,
        className: student.className,
        seatNumber: student.seatNumber,
        gender: student.gender,
        date: selectedDate,
        status: attendanceStatus[student._id] || "Not Marked",
      }));
      setAttendanceRecords(records);
    }
  }, [students, attendanceStatus, selectedDate]);

  const markAttendance = async (studentId, status) => {
    setAttendanceStatus((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    setAttendanceStatus({});
    setPage(0); // Reset to first page
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Edit functionality
  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setEditStatus(attendanceStatus[student._id] || "Present");
    setEditDialogOpen(true);
  };

  const handleEditSave = () => {
    if (selectedStudent) {
      setAttendanceStatus((prev) => ({
        ...prev,
        [selectedStudent._id]: editStatus,
      }));
    }
    setEditDialogOpen(false);
  };

  // Delete functionality
  const handleDeleteClick = (student) => {
    setSelectedStudent(student);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedStudent) {
      setAttendanceStatus((prev) => {
        const newStatus = { ...prev };
        delete newStatus[selectedStudent._id];
        return newStatus;
      });
    }
    setDeleteDialogOpen(false);
  };

  // Get paginated students
  const paginatedStudents = students.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <Box sx={styles.container}>
      <Typography variant="h5" sx={styles.header}>
        Student Attendance
      </Typography>

      {/* Class and Date Selection */}
      <Box sx={styles.selectSection}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Select Class</InputLabel>
              <Select
                value={selectedClass}
                label="Select Class"
                onChange={handleClassChange}
                sx={{ borderRadius: "8px" }}
              >
                {classOptions.map((cls) => (
                  <MenuItem key={cls} value={cls}>
                    {cls}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="date"
              label="Select Date"
              value={selectedDate}
              onChange={handleDateChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ borderRadius: "8px" }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Selected Info */}
      {selectedClass && selectedDate && (
        <Box sx={styles.infoText}>
          <Typography variant="body1">
            📅 Showing attendance for <strong>{selectedClass}</strong> class on{" "}
            <strong>{selectedDate}</strong>
          </Typography>
        </Box>
      )}

      {/* Attendance Table */}
      {selectedClass ? (
        <Box sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow sx={styles.tableHead}>
                <TableCell>Avatar</TableCell>
                <TableCell>Seat No.</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Class</TableCell>
                <TableCell align="center">Present (P)</TableCell>
                <TableCell align="center">Absent (A)</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedStudents.length > 0 ? (
                paginatedStudents.map((s) => (
                  <TableRow key={s._id} sx={styles.tableRow}>
                    <TableCell>
                      <Avatar sx={styles.avatar}>
                        <PersonIcon sx={{ color: "#1a237e" }} />
                      </Avatar>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight="600">
                        {s.seatNumber}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight="500">
                        {s.name}
                      </Typography>
                    </TableCell>
                    <TableCell>{s.className}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant={
                          attendanceStatus[s._id] === "Present"
                            ? "contained"
                            : "outlined"
                        }
                        color="success"
                        size="small"
                        onClick={() => markAttendance(s._id, "Present")}
                        sx={styles.presentBtn}
                      >
                        P
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant={
                          attendanceStatus[s._id] === "Absent"
                            ? "contained"
                            : "outlined"
                        }
                        color="error"
                        size="small"
                        onClick={() => markAttendance(s._id, "Absent")}
                        sx={styles.absentBtn}
                      >
                        A
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        label={attendanceStatus[s._id] || "Not Marked"}
                        size="small"
                        sx={
                          attendanceStatus[s._id] === "Present"
                            ? styles.chipPresent
                            : attendanceStatus[s._id] === "Absent"
                              ? styles.chipAbsent
                              : styles.chipNotMarked
                        }
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton
                          size="small"
                          onClick={() => handleEditClick(s)}
                          sx={styles.editBtn}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteClick(s)}
                          sx={styles.deleteBtn}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    <Typography variant="body1" color="text.secondary" py={4}>
                      No students found in this class
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[6, 10]}
            component="div"
            count={students.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              borderTop: "1px solid #e0e0e0",
              backgroundColor: "#fafafa",
            }}
          />
        </Box>
      ) : (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography variant="body1" color="text.secondary">
            Please select a class to view students
          </Typography>
        </Box>
      )}

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Attendance</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Student: <strong>{selectedStudent?.name}</strong>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Class: {selectedStudent?.className} | Seat No:{" "}
            {selectedStudent?.seatNumber}
          </Typography>
          <FormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={editStatus}
              label="Status"
              onChange={(e) => setEditStatus(e.target.value)}
            >
              <MenuItem value="Present">Present</MenuItem>
              <MenuItem value="Absent">Absent</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleEditSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Attendance</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete attendance record for{" "}
            <strong>{selectedStudent?.name}</strong>?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button
            onClick={handleDeleteConfirm}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
