package com.yb.rest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.IAdDao;
import com.yb.rest.dao.IManDao;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.Route;

@Service
public class ManServiceImpl implements IManService {

	@Autowired
	IManDao repo;

	@Autowired
	IAdDao adrepo;

	@Override
	public int getIdx(String username) {
		return repo.getIdx(username);
	}

	// customer번호에 해당되는 nationtb 상품 보여주기.
	@Override
	public ArrayList<Nation> nationList(int customer) {
		ArrayList<Nation> list = repo.nationList(customer);
		return list;
	}

	@Override
	public ArrayList<Nation> nationListAll(int customer) {
		ArrayList<Nation> list = repo.nationListAll(customer);
		return list;
	}

	@Override
	public boolean nationinsert(String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date) {
		// TODO Auto-generated method stub
		boolean res = repo.nationinsert(en_name, ko_name, dust, continents, showcnt, customer, weight, speech, price,
				s_date, f_date);
		return res;
	}

	@Override
	public boolean nationdelete(int customer) {
		// TODO Auto-generated method stub
		boolean res = repo.nationdelete(customer);
		return res;
	}

	@Override
	public boolean nationupdate(String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date) {
		// TODO Auto-generated method stub
		boolean res = repo.nationupdate(en_name, ko_name, dust, continents, showcnt, customer, weight, speech, price,
				s_date, f_date);
		return res;
	}

	@Override
	public ArrayList<Monthtb> monthList(int customer) {
		// TODO Auto-generated method stub
		ArrayList<Monthtb> list = repo.monthList(customer);
		return list;
	}

	@Override
	public ArrayList<Monthtb> monthListAll(int customer) {
		// TODO Auto-generated method stub
		ArrayList<Monthtb> list = repo.monthListAll(customer);
		return list;
	}

	@Override
	public boolean insertMonthtb(Monthtb montb) {
		// TODO Auto-generated method stub
		boolean insertMonthtb = repo.insertMonthtb(montb);
		return insertMonthtb;
	}

	@Override
	public boolean updateMonthtb(Monthtb montb) {
		// TODO Auto-generated method stub
		boolean updateMonthtb = repo.updateMonthtb(montb);
		return updateMonthtb;
	}

	@Override
	public boolean deleteMonthtb(int nation) {
		// TODO Auto-generated method stub
		boolean deleteMonthtb = repo.deleteMonthtb(nation);
		return deleteMonthtb;
	}

}
