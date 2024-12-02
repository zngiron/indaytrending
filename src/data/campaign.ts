'use server';

import { RowDataPacket } from 'mysql2';
import { pool } from '@/library/database';

interface CampaignParams {
  uuid: string;
  url: string;
  ip_address: string;
}

export const postCampaign = async ({
  uuid,
  url,
  ip_address,
}: CampaignParams) => {
  const connection = await pool.getConnection();
  try {
    await connection.execute(
      `
        CREATE TABLE IF NOT EXISTS it_campaign (
          id INT AUTO_INCREMENT PRIMARY KEY,
          uuid VARCHAR(255) NOT NULL,
          ip_address VARCHAR(255) NOT NULL,
          url VARCHAR(255),
          status TINYINT(1) DEFAULT 0,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `,
    );

    await connection.execute(
      `INSERT INTO it_campaign (uuid, ip_address, url, status) VALUES (?, ?, ?, ?)`,
      [uuid, ip_address, url, 0],
    );

    return {
      message: 'Successfully saved your entry!',
    };
  } catch (error) {
    return {
      message: 'There was an error saving your entry.',
    };
  } finally {
    connection.release();
  }
};

interface Campaign extends RowDataPacket {
  id: number;
  uuid: string;
  ip_address: string;
  url: string;
  status: number;
  created_at: Date;
}

export const getCampaign = async (uuid: string) => {
  if (!uuid) {
    return null;
  }

  const connection = await pool.getConnection();

  try {
    const [rows] = await connection.execute<Campaign[]>(
      'SELECT * FROM it_campaign WHERE uuid = ?',
      [uuid],
    );
    return rows[0] || null;
  } catch (error) {
    return null;
  } finally {
    connection.release();
  }
};

export const getIpAddress = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip || '';
  } catch (error) {
    return '';
  }
};
