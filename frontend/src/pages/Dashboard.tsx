import { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/dashboard';
import Cards from './components/CardsDashboard'
import 'chart.js/auto';

export default function Dashboard() {

    return (
        <DashboardLayout >
            <Cards />
        </DashboardLayout>
    );
}