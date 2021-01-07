package com.AuthLaunchPad.backend.View;

import com.AuthLaunchPad.backend.Model.Sample;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SampleRepository extends MongoRepository<Sample, Long> {
}
